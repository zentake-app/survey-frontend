import React from "react";

import {
  MultipleChoiceStrategy,
  MultipleChoiceOption
} from "../../models/ResponseStrategy/MultipleChoice";
import { ZuluCheckbox } from "../atoms/inputs/Checkbox";

interface IMultipleChoiceResponseProps {
  responseStrategy: MultipleChoiceStrategy;
}

export default function MultipleChoiceResponse(
  props: IMultipleChoiceResponseProps
) {
  const responseStrategy = props.responseStrategy;

  const [selectedOptions, _setSelectedOptions] = React.useState<
    MultipleChoiceOption[]
  >([]);

  const setValue = (option: MultipleChoiceOption, value: boolean) => {
    const valueIndex = selectedOptions.findIndex(v => v.value === option.value);
    if (valueIndex > -1) {
      selectedOptions.splice(valueIndex, 1);
      _setSelectedOptions(selectedOptions);
      responseStrategy.setResponse(selectedOptions);
    } else {
      const newOptions = [...selectedOptions, option];
      _setSelectedOptions(newOptions);
      responseStrategy.setResponse(newOptions);
    }
  };

  return (
    <div>
      {responseStrategy.responseOptions.map((responseOption, index) => {
        return (
          <ZuluCheckbox
            label={`${responseOption.value}` || ""}
            checked={
              !!selectedOptions.find(o => o.value === responseOption.value)
            }
            onChange={newValue => setValue(responseOption, newValue)}
          />
        );
      })}
    </div>
  );
}
