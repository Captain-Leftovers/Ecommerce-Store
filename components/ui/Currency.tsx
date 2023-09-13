
import { currencyFormatter } from "@/lib/utils"


type CurrencyProps = {
  value?: string | number
  }
export default function Currency({value}: CurrencyProps) {


return (
  <div className="font-semibold " >
    {currencyFormatter.format(Number(value))}
  </div>
  )
}

