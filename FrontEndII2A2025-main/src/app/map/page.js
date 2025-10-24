export default function map() {
    const nomes = ['joao', 'paulo', 'pedro',  'antonio', 'hillary', 'mariany'];
    return (
        <div>
            <h1>MAP</h1>
            <ul>
            {nomes.map((nome) => (
            <li key ={id}>{nome}</li> 
            ))}
            </ul>
        </div>
    )
}