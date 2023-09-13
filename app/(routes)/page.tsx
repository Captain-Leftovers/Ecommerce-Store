import Container from "@/components/ui/Container";

import Billboard from "@/components/Billboard";
import getBillboard from "@/actions/getBillboard";

export const revalidate = 0;

export default async function HomePage() {

  const billboard = await getBillboard("1de051ad-d06e-493c-9eb4-39a14e2c0f35")

  return (

      <Container>
        <div className="space-y-10 pb-10 ">
          <Billboard data={billboard} />
        </div>
      </Container>
    )
}