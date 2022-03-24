import { useRouter } from "next/router";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";


export default function Share() {
  const router = useRouter();
 
  return (
    <Layout>
      <Container>
        <Header />
       
            
        
      </Container>
    </Layout>
  );
}

