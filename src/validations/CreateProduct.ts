import { number, object, string } from "yup";

let CreateProductDefaultValues = {
  productId: "",
  productName: "",
  unitOfMeasure: "",
  productType: "",
  productPrice: null,
};

let CreateProductSchema = object().shape({
  productId: string().notRequired(),
  productName: string().notRequired(),
  unitOfMeasure: string().notRequired(),
  productType: string().notRequired(),
  productPrice: number().notRequired(),
});

export { CreateProductDefaultValues, CreateProductSchema };
