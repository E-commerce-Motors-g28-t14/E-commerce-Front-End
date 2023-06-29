import { z } from "zod";

export const updateCarSchema = z.object({
  id: z.string(),
  brand: z.string().max(150).nonempty({ message: "Marca obrigatória" }),
  model: z.string().max(150).nonempty({ message: "Modelo obrigatório" }),
  year: z.string(),
  fuel: z.string().max(150),
  km: z.string().nonempty({ message: "KM obrigatória" }).transform(Number),
  color: z.string().max(150).nonempty({ message: "Cor obrigatória" }),
  fipePrice: z.string(),
  price: z.string().max(150).nonempty({ message: "Preço obrigatório" }),
  description: z.string().max(150).nullish(),
  photoCape: z.string().nonempty({ message: "Foto de capa obrigatória" }),
  photo1: z.string().nullish(),
  photo2: z.string().nullish(),
  photo3: z.string().nullish(),
  photo4: z.string().nullish(),
  photo5: z.string().nullish(),
  photo6: z.string().nullish(),
  isActive: z.boolean(),
});

export type iUpdaterCar = z.infer<typeof updateCarSchema>;