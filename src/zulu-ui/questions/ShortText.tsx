import React, { useState } from "react";

import { TextStrategy, TextOption } from "../../models/ResponseStrategy/Text";
import { ZuluTextField } from "../atoms/inputs/TextField";

interface IShortTextResponse {
  responseStrategy: TextStrategy;
}

export default function ShortText(props: IShortTextResponse) {
  const [responseValue, _setResponseValue] = useState<TextOption>({
    value: ""
  });

  const setResponseValue = (value: TextOption) => {
    _setResponseValue(value);
    props.responseStrategy.setResponse(value);
  };

  return (
    <div>
      <ZuluTextField
        onChange={newValue => setResponseValue({ value: newValue })}
        value={responseValue.value}
      />
    </div>
  );
}
