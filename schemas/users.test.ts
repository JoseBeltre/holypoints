import { describe, it, expect } from "vitest";
import { UserSchema } from "./users";

describe("UserSchema", () => {
  it("valida un usuario válido con campos mínimos", () => {
    const data = {
      firstName: "José",
      lastName: "Pérez",
      createdBy: "admin-uid",
    };

    const result = UserSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("valida un usuario con todos los campos opcionales", () => {
    const data = {
      firstName: "María",
      lastName: "Gómez",
      email: "maria@gmail.com",
      photoUrl: "https://example.com/photo.png",
      createdBy: "admin-uid",
      address: "Santo Domingo",
      phoneNumber: "8091234567",
      birthDate: "1998-05-10",
    };

    expect(() => UserSchema.parse(data)).not.toThrow();
  });

  it("falla si firstName tiene menos de 3 caracteres", () => {
    const result = UserSchema.safeParse({
      firstName: "Jo",
      lastName: "Pérez",
      createdBy: "admin",
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues[0].path).toEqual(["firstName"]);
    }
  });

  it("falla si firstName contiene números", () => {
    const result = UserSchema.safeParse({
      firstName: "Jose1",
      lastName: "Pérez",
      createdBy: "admin",
    });

    expect(result.success).toBe(false);
  });

  it("falla si lastName tiene caracteres inválidos", () => {
    const result = UserSchema.safeParse({
      firstName: "José",
      lastName: "Pérez!",
      createdBy: "admin",
    });

    expect(result.success).toBe(false);
  });

  it("falla si email es inválido", () => {
    const result = UserSchema.safeParse({
      firstName: "José",
      lastName: "Pérez",
      email: "correo-malo",
      createdBy: "admin",
    });

    expect(result.success).toBe(false);
  });

  it("falla si phoneNumber no tiene 10 o 11 dígitos", () => {
    const result = UserSchema.safeParse({
      firstName: "José",
      lastName: "Pérez",
      phoneNumber: "12345",
      createdBy: "admin",
    });

    expect(result.success).toBe(false);
  });

  it("falla si falta createdBy (campo requerido)", () => {
    const result = UserSchema.safeParse({
      firstName: "José",
      lastName: "Pérez",
    });

    expect(result.success).toBe(false);

    if (!result.success) {
      expect(result.error.issues.some(issue =>
        issue.path.includes("createdBy")
      )).toBe(true);
    }
  });
});
