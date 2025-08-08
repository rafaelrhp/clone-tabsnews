import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let UpdatedAtText = "Carregando...";
  let database = [];

  if (!isLoading && data) {
    UpdatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
    database = data.dependencies.database;
  }

  return (
    <>
      <div>Última atualização: {UpdatedAtText} </div>
      <div>Banco de dados</div>
      <div>
        <div>Versão do Banco: {database.version ?? "Carregando..."} </div>
        <div>
          Máximo de conexões: {database.max_connections ?? "Carregando..."}{" "}
        </div>
        <div>
          Conexões Abertas: {database.opened_connections ?? "Carregando..."}{" "}
        </div>
      </div>
    </>
  );
}
