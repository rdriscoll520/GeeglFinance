async function getTest() { // testing database
    const res = await fetch('http://127.0.0.1:8090/api/collections/test/records?page=1&perPage=30', 
    {cache: 'no-store'}
    );

    const data = await res.json(); // convert to JSON
    return data?.items || [];
}

export default async function Fetch() {
    const test = await getTest();

    return (
        <div>
            <h1>Fetching test</h1>
            <div>
                {test?.map((note) => {
                    return <Test key={note.id} note={note} />;
                })}
            </div>
        </div>
    );
}

function Test({ note }) {
    const { id, field, created, updated } = note;

    return (
        <div>
            <small>{field}</small>
            <small>{created}</small>
            <small>{updated}</small>

        </div>
    );
}
