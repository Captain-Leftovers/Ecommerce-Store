const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    });




type CurrencyProps = {
    
  }
export default function Currency({}: CurrencyProps) {


return (
  <div className="font-semibold " >
     Currency
  </div>
  )
}

