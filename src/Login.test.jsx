import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Login from "./Login";

describe("Componente de Login", () => {
  // Teste 1: Verifica se a tela carrega o título
  it("deve renderizar o título na tela", () => {
    // 1. Renderiza o componente na memória
    render(<Login />);

    // 2. Busca um título (heading) que contenha a palavra "Login" ou "Portal"
    const titulo = screen.getByRole("heading");

    // 3. Afirma (expect) que ele deve estar no documento
    expect(titulo).toBeInTheDocument();
  });

  // Teste 2: Simula o caminho feliz (login com sucesso)
  it("deve mostrar mensagem de sucesso ao colocar as credenciais corretas", () => {
    render(<Login />);

    // 1. Pega os elementos da tela como um usuário faria
    const inputEmail = screen.getByPlaceholderText("E-mail");
    const inputSenha = screen.getByPlaceholderText("Senha");
    const botaoAcessar = screen.getByRole("button", { name: /acessar/i });

    // 2. Simula a digitação (fireEvent.change)
    fireEvent.change(inputEmail, {
      target: { value: "eduardo.lino@pucpr.br" },
    });
    fireEvent.change(inputSenha, { target: { value: "123456" } });

    // 3. Simula o clique no botão
    fireEvent.click(botaoAcessar);

    // 4. Verifica se a mensagem de sucesso apareceu na tela
    const mensagem = screen.getByText("Acessado com sucesso!");
    expect(mensagem).toBeInTheDocument();
  });

  // Teste 3: Simula o caminho triste (erro de login)
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
