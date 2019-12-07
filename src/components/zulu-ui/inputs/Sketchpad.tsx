import * as React from 'react';

export type Point = { x: number; y: number };

export interface SketchpadProps {
  imageUrl: string;
  strokeColor: string;
  strokeWidth: number;
  style?: React.CSSProperties
}
interface SketchpadState {
  lines: Point[][];
  isDrawing: boolean;
}
class Sketchpad extends React.Component<SketchpadProps, SketchpadState> {
  private drawingArea = React.createRef<SVGSVGElement>();
  constructor(props: SketchpadProps) {
    super(props);
    this.state = {
      lines: [],
      isDrawing: false,
    };
  }

  handleMouseDown = (mouseEvent: React.MouseEvent<SVGSVGElement>) => {
    if (mouseEvent.button != 0) {
      return;
    }
    const point = this.relativeCoordinatesForEvent(mouseEvent);
    if (!point) {
      return
    }
    this.setState(prevState => {
      return {
        lines: [...prevState.lines, [point]],
        isDrawing: true,
      };
    });
  };
  handleMouseUp = () => {
    this.setState({ isDrawing: false });
  };
  handleMouseMove = (mouseEvent: React.MouseEvent<SVGSVGElement>) => {
    if (!this.state.isDrawing) {
      return;
    }
    const point = this.relativeCoordinatesForEvent(mouseEvent);
    if (!point) {
      return
    }
    this.setState(prevState => {
      const currentLines = [...prevState.lines]
      const lastLine = currentLines.splice(currentLines.length - 1, 1)
      if (!lastLine || !lastLine[0]) {
        return prevState
      }
      lastLine[0].push(point)
      return {
        ...prevState,
        lines: [...currentLines, ...lastLine],
      };
    });
  };

  relativeCoordinatesForEvent = (
    mouseEvent: React.MouseEvent<SVGSVGElement>,
  ) => {
    if (!this.drawingArea || !this.drawingArea.current) {
      return;
    }
    const boundingRect = this.drawingArea.current.getBoundingClientRect();
    return Object.freeze({
      x: mouseEvent.clientX - boundingRect.left,
      y: mouseEvent.clientY - boundingRect.top,
    });
  };
  render() {
    const { strokeColor = "black", strokeWidth = 3 } = this.props;
    return (
      <svg
        style={{ height: '100%', width: '100%', ...(this.props.style || {}) }}
        ref={this.drawingArea}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}

      >
        {this.state.lines.map((line, index) => (
          <DrawingLine color={strokeColor} line={line} strokeWidth={strokeWidth} key={index} />
        ))}
      </ svg>
    );
  }
}

const Drawing = ({ lines, strokeColor, strokeWidth, children }: { lines: Point[][], strokeColor: string, strokeWidth: number, children: React.ReactNode }) => {
  return (
    <svg>
      {lines.map((line, index) => (
        <DrawingLine color={strokeColor} line={line} strokeWidth={strokeWidth} key={index} />
      ))}
    </svg>
  );
};

const DrawingLine = ({ line, color, strokeWidth }: { line: Point[], color: string, strokeWidth: number }) => {
  const pathData = `M ${line.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  return <path fill="none" stroke={color} strokeWidth={strokeWidth} d={pathData} />;
};
export { Sketchpad };
