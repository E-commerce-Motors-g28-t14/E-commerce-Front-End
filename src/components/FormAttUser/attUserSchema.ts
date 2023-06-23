import { z } from "zod";

export const attUserSchema = z.object({
  name: z.string().nonempty({ message: "O nome é obrigatório" }),
  email: z.string().nonempty({ message: "O email é obrigatório" }),
  cpf: z.string().nonempty({ message: "O CPF é obrigatório" }),
  phone: z.string().nonempty({ message: "O Telefone é obrigatório" }),
  birthdate: z.string().nonempty({ message: "A data é obrigatória" }),
  description: z.string(),
});

export type iAttUser = z.infer<typeof attUserSchema>;
