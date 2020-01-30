import React, { Component } from "react";

import { ZuluResponseField } from "..";
import { MultipleChoiceStrategy } from "../../models/ResponseStrategy/MultipleChoice";
import { ZuluCheckbox } from "../atoms/inputs/Checkbox";

interface IMultipleChoiceResponseProps {
  responseStrategy: MultipleChoiceStrategy;
}

export default class MultipleChoiceResponse
  extends Component<IMultipleChoiceResponseProps>
  implements ZuluResponseField {
  public responseStrategy: MultipleChoiceStrategy;
  constructor(props: IMultipleChoiceResponseProps) {
    super(props);
    this.responseStrategy = props.responseStrategy;
  }
  render() {
    const responseStrategy = this.responseStrategy;
    return (
      <div>
        {responseStrategy.responseOptions.map((responseOption, index) => {
          return (
            <ZuluCheckbox
              label={`${responseOption.value}` || ""}
              checked={false}
              onChange={() => null}
            />
          );
        })}
      </div>
    );
  }
}
