import clientPromise from "../utils/mongodb";

export default function Home({ joblist }) {
  return (
    <div className="container">
      <div>
        {joblist.map((job, index) => {
          return (
            <div className="card" key={index}>
              <h2>{job.title}</h2>
              <p>{job.role}</p>
              <p>{job.budget}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("dejobs");

  let joblist = await db.collection("joblist").find({}).toArray();
  joblist = JSON.parse(JSON.stringify(joblist));

  return {
    props: { joblist },
  };
}