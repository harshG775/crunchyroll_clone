export default async function page({
    searchParams,
}: {
    searchParams: { sidebar: boolean };
}) {
    return <div>Test:{searchParams.sidebar ? "true" : "false"}</div>;
}
