import { object, string } from "yup";

let HeadlineDefaultValues = {
  firstName: "",
  lastName: "",
  city: "",
  headline: "",
};

let HeadlineSchema = object().shape({
  firstName: string().required(),
  lastName: string().notRequired(),
  city: string().notRequired(),
  headline: string().notRequired(),
});

let ExperienceDefaultValues = {
  title: "",
  type: "",
  companyName: "",
  location: "",
  startDate: "",
  endDate: "",
  industry: "",
};

let ExperienceSchema = object().shape({
  title: string().required(),
  type: string().required(),
  companyName: string().required(),
  location: string().notRequired(),
  startDate: string().required(),
  endDate: string().required(),
  industry: string().notRequired(),
});

let EduDefaultValues = {
  school: "",
  degree: "",
  field: "",
  grade: "",
  startDate: "",
  endDate: "",
};

let EduSchema = object().shape({
  school: string().required(),
  degree: string().required(),
  field: string().required(),
  grade: string().notRequired(),
  startDate: string().required(),
  endDate: string().required(),
});

let SkillDefaultValues = {
  skill: "",
};

let SkillSchema = object().shape({
  skill: string().required(),
});

export {
  SkillDefaultValues,
  SkillSchema,
  EduDefaultValues,
  EduSchema,
  HeadlineDefaultValues,
  HeadlineSchema,
  ExperienceDefaultValues,
  ExperienceSchema,
};
