const Page = async ({ params }) => { 
    const id = (await params).id;
    console.log(id);
    return <div>Page</div>
}

export default Page;