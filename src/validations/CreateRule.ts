import { boolean, number, object, string } from "yup";

let CreateRuleDefaultValues = {
  name: "",
  description: "",
  ruleType: "",
  transactionCategoryType: "",
  transactionType: "",
  characteristicType: "",
  tierCascade: false,
};

let CreateRuleSchema = object().shape({
  name: string().required(),
  description: string().notRequired(),
  ruleType: string().notRequired(),
  transactionCategoryType: string().notRequired(),
  transactionType: string().notRequired(),
  characteristicType: string().notRequired(),
  tierCascade: boolean().notRequired(),
});

export { CreateRuleDefaultValues, CreateRuleSchema };
