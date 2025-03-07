import { useAuth } from "./token";
export const GeneradorToken = () => {
  const { user, token } = useAuth();
    const copyToken = async () => {
        try {
        await navigator.clipboard.writeText(token);
        alert('Token copiado exitosamente');
        } catch (err) {
        console.log(err);
        }
    };
    
  return (
    <div>
      <h1>Generador de Token</h1>
    
      <button onClick={copyToken}>Copiar Token</button>
      <p>{token}</p>
    </div>
  );
}