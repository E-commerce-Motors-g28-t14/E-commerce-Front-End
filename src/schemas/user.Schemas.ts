import { z } from "zod";

export const UserSchema = z
  .object({
    name: z.string().nonempty({ message: "O nome é obrigatório" }),
    email: z.string().nonempty({ message: "O email é obrigatório" }),
    cpf: z.string().nonempty({ message: "O CPF é obrigatório" }),
    phone: z.string(),
    birthdate: z.string(),
    description: z.string(),
    password: z
      .string()
      .nonempty({ message: "A senha é obrigatória" })
      .min(8, "Mínimo 8 Caracteres"),
    confirmPassword: z.string().nonempty({ message: "Confirme sua senha" }),
    district: z.string(),
    zipCode: z.string().nonempty({ message: "O cep é obrigatório" }),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    complement: z.string(),
    number: z.string().nonempty({ message: "Número é obrigatório" }),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais!",
  });

export const UserSchemaLogin = z.object({
  email: z.string().nonempty({ message: "O email é obrigatório" }),
  password: z
    .string()
    .nonempty({ message: "A senha é obrigatório" })
    .min(8, "Mínimo 8 Caracteres"),
});
