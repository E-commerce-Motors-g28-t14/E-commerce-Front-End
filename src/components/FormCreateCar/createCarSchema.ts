import { z } from "zod";

export const registerCarSchema = z.object({
  brand: z.string().max(150).nonempty({ message: "Marca obrigatória" }),
  model: z.string().max(150).nonempty({ message: "Modelo obrigatório" }),
  year: z.string().nonempty({ message: "Ano obrigatório" }).transform(Number),
  fuel: z.string().max(150).nonempty({ message: "Combustível obrigatório" }),
  km: z.string().nonempty({ message: "KM obrigatória" }).transform(Number),
  color: z.string().max(150).nonempty({ message: "Cor obrigatória" }),
  fipePrice: z.string().nonempty({ message: "Preço Fipe obrigatório" }),
  price: z.string().max(150).nonempty({ message: "Preço obrigatório" }),
  description: z.string().max(150).nullish(),
  photoCape: z.string().nonempty({ message: "Foto de capa obrigatória" }),
  photo1: z.string().nullish(),
  photo2: z.string().nullish(),
  photo3: z.string().nullish(),
  photo4: z.string().nullish(),
  photo5: z.string().nullish(),
  photo6: z.string().nullish(),
});

export type iRegisterCar = z.infer<typeof registerCarSchema>;
