import { useState } from "react";

export const useQuoteForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setStatus("loading");
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "dd021d35-740d-4090-a299-1ec64431f2c1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      console.log("Mensagem enviada!");
      setStatus("success");

      form.reset();
    } else {
      console.error("Erro ao enviar:", result);
      setStatus("error");
    }
  };

  return {
    handleSubmit,
    status,
  };
};
