import { object, string } from "yup";

let AddKeyFigureDefaultValues = {
  keyFigureType: "",
  sourceDocument: "",
  keyFigure: "",
  keyFigureTitle: "",
  mathematicalOperation: "",
  customKeyFigureType1: "",
  customKeyFigureType2: "",
};

let AddKeyFigureSchema = object().shape({
  keyFigureType: string().notRequired(),
  sourceDocument: string().notRequired(),
  keyFigure: string().notRequired(),
  keyFigureTitle: string().notRequired(),
  mathematicalOperation: string().notRequired(),
  customKeyFigureType1: string().notRequired(),
  customKeyFigureType2: string().notRequired(),
});

export { AddKeyFigureDefaultValues, AddKeyFigureSchema };
