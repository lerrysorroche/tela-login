import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "./Login";

describe("Componente de Login", () => {
  // TESTE 1: Verifica se a tela carrega o título
  it("deve renderizar o título na tela", () => {
    render(<Login />);

    const titulo = screen.getByRole("heading");

    expect(titulo).toBeInTheDocument();
  });

  // TESTE 2: Simula sucesso no login
  it("deve mostrar mensagem de sucesso ao colocar as credenciais corretas", () => {
    render(<Login />);

    const inputEmail = screen.getByPlaceholderText("E-mail");
    const inputSenha = screen.getByPlaceholderText("Senha");
    const botaoAcessar = screen.getByRole("button", { name: /acessar/i });

    fireEvent.change(inputEmail, {
      target: { value: "eduardo.lino@pucpr.br" },
    });
    fireEvent.change(inputSenha, { target: { value: "123456" } });
    fireEvent.click(botaoAcessar);

    const mensagem = screen.getByText("Acessado com sucesso!");
    expect(mensagem).toBeInTheDocument();
  });

  // TESTE 3: Simula falha no login
  it("deve mostrar mensagem de erro com credenciais incorretas", () => {
    render(<Login />);

    const inputEmail = screen.getByPlaceholderText("E-mail");
    const inputSenha = screen.getByPlaceholderText("Senha");
    const botaoAcessar = screen.getByRole("button", { name: /acessar/i });

    fireEvent.change(inputEmail, { target: { value: "usuario@errado.com" } });
    fireEvent.change(inputSenha, { target: { value: "senha-errada" } });
    fireEvent.click(botaoAcessar);

    const mensagemErro = screen.getByText("Usuário ou senha incorretos!");
    expect(mensagemErro).toBeInTheDocument();
  });
});
