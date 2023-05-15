
import handler from './user'
export default function Home() {

  const req={method:"GET"},res='';
  handler(req,res);
  return <h1>hi</h1>;
}
