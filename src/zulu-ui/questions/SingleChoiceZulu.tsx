import React, { Component, useState } from "react";

import { ZuluResponseField } from "..";
import { MultipleChoiceStrategy } from "../../models/ResponseStrategy/MultipleChoice";
import { ZuluRadio } from "../atoms/inputs/Radio";
import { SingleChoiceStrategy } from "../../models/ResponseStrategy/SingleChoice";

interface ISingleChoiceResponseProps {
  responseStrategy: SingleChoiceStrategy;
}

interface ISingleChoiceState {
  selectedAnswerIndex: number | null;
}

export default function SingleChoiceResponse(
  props: ISingleChoiceResponseProps
) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const responseStrategy = props.responseStrategy;

  return (
    <div>
      {responseStrategy.responseOptions.map((responseOption, index) => {
        return (
          <ZuluRadio
            key={index}
            label={`${responseOption.value}` || ""}
            checked={index === selectedAnswerIndex}
            onChange={() => {
              setSelectedAnswerIndex(index);
              responseStrategy.setResponse(
                responseStrategy.responseOptions[index]
              );
            }}
          />
        );
      })}
    </div>
  );
}
