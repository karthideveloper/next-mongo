
import handler from './hello'
export default function Home() {
console.log('hi')
  const req={method:"GET"},res='';
  handler(req,res);
  return <h1>hi</h1>;
}
