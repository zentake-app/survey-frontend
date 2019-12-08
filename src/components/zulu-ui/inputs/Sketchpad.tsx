import * as React from 'react';

export type Point = {x: number; y: number};

export interface SketchpadProps {
  strokeColor: string;
  strokeWidth: number;
  style?: React.CSSProperties;
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

  handleMouseDown = (
    mouseEvent:
      | React.MouseEvent<SVGSVGElement>
      | React.TouchEvent<SVGSVGElement>,
  ) => {
    mouseEvent.preventDefault()
    if ('button' in mouseEvent && mouseEvent.button != 0) {

      return;
    }
    const point = this.relativeCoordinatesForEvent(mouseEvent);
    if (!point) {
      return;
    }
    this.setState(prevState => {
      return {
        lines: [...prevState.lines, [point]],
        isDrawing: true,
      };
    });
  };
  handleMouseUp = () => {
    this.setState({isDrawing: false});
  };
  handleMouseMove = (
    mouseEvent:
      | React.MouseEvent<SVGSVGElement>
      | React.TouchEvent<SVGSVGElement>,
  ) => {
    mouseEvent.preventDefault()
    if (!this.state.isDrawing) {
      return;
    }
    const point = this.relativeCoordinatesForEvent(mouseEvent);
    if (!point) {
      return;
    }
    this.setState(prevState => {
      const currentLines = [...prevState.lines];
      const lastLine = currentLines.splice(currentLines.length - 1, 1);
      if (!lastLine || !lastLine[0]) {
        return prevState;
      }
      lastLine[0].push(point);
      return {
        ...prevState,
        lines: [...currentLines, ...lastLine],
      };
    });
  };

  getXYForTouchOrClick = (
    event: React.TouchEvent<SVGSVGElement> | React.MouseEvent<SVGSVGElement>,
  ): Point | null => {
    if ('touches' in event) {
      const touchEvent = event as React.TouchEvent<SVGSVGElement>;
      if (touchEvent.touches.length > 0) {
        return {
          x: touchEvent.touches[0].clientX,
          y: touchEvent.touches[0].clientY,
        };
      }
    }
    if ('clientX' in event && 'clientY' in event) {
      const mouseEvent = event as React.MouseEvent<SVGSVGElement>;
      return {x: mouseEvent.clientX, y: mouseEvent.clientY};
    }
    return null;
  };

  relativeCoordinatesForEvent = (
    mouseEvent:
      | React.MouseEvent<SVGSVGElement>
      | React.TouchEvent<SVGSVGElement>,
  ) => {
    if (!this.drawingArea || !this.drawingArea.current) {
      return;
    }
    const boundingRect = this.drawingArea.current.getBoundingClientRect();
    const eventXY = this.getXYForTouchOrClick(mouseEvent);
    if (!eventXY) {
      return null;
    }
    return Object.freeze({
      x: eventXY.x - boundingRect.left,
      y: eventXY.y - boundingRect.top,
    });
  };
  render() {
    const {strokeColor = 'black', strokeWidth = 3} = this.props;
    return (
      <svg
        style={{touchAction: 'none', ...(this.props.style || {})}}
        ref={this.drawingArea}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        onTouchStart={this.handleMouseDown}
        onTouchEnd={this.handleMouseUp}
        onTouchMove={this.handleMouseMove}>
        {this.state.lines.map((line, index) => (
          <DrawingLine
            color={strokeColor}
            line={line}
            strokeWidth={strokeWidth}
            key={index}
          />
        ))}
      </svg>
    );
  }
}

const Drawing = ({
  lines,
  strokeColor,
  strokeWidth,
  children,
}: {
  lines: Point[][];
  strokeColor: string;
  strokeWidth: number;
  children: React.ReactNode;
}) => {
  return (
    <svg>
      {lines.map((line, index) => (
        <DrawingLine
          color={strokeColor}
          line={line}
          strokeWidth={strokeWidth}
          key={index}
        />
      ))}
    </svg>
  );
};

const DrawingLine = ({
  line,
  color,
  strokeWidth,
}: {
  line: Point[];
  color: string;
  strokeWidth: number;
}) => {
  const pathData = `M ${line.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  return (
    <path fill="none" stroke={color} strokeWidth={strokeWidth} d={pathData} />
  );
};
export {Sketchpad};
