import { z } from "zod";

export const attUserAddressSchema = z.object({
  district: z.string(),
  zipCode: z.string().nonempty({ message: "O cep é obrigatório" }),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  complement: z.string(),
  number: z.string().nonempty({ message: "Número é obrigatório" }),
});

export type iAttUserAddress = z.infer<typeof attUserAddressSchema>;
