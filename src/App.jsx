import React from 'react'
import SavingsChart from './SavingsChart.jsx'

function App() {
  const chartPieData = [
    {
      label: 'קרן פנסיה',
      data: 318695,
      backgroundColor: '#33b242',
      hoverBackgroundColor: '#33b242',
      tooltipColor: '#d7f4db',
    },
    {
      label: 'קופת גמל',
      data: 102502,
      backgroundColor: '#003c7f',
      hoverBackgroundColor: '#003c7f',
      tooltipColor: '#c7e1ff',
    },
    {
      label: 'גמל להשקעה',
      data: 324658,
      backgroundColor: '#2d76cb',
      hoverBackgroundColor: '#2d76cb',
      tooltipColor: '#e2ecf9',
    },
    {
      label: 'קרן השתלמות',
      data: 178506,
      backgroundColor: '#c7e1ff',
      hoverBackgroundColor: '#c7e1ff',
      tooltipColor: '#e2ecf9',
    },
    {
      label: 'ביטוח מנהלים',
      data: 57456,
      backgroundColor: '#f9ba20',
      hoverBackgroundColor: '#f9ba20',
      tooltipColor: '#fef0cd',
    },
    {
      label: 'חסכון פיננסי',
      data: 89456,
      backgroundColor: '#7e20f9',
      hoverBackgroundColor: '#7e20f9',
      tooltipColor: '#bfa1e7',
    },
    {
      label: 'ביטוח נסיעות לחו"ל',
      data: 117589,
      backgroundColor: '#787878',
      hoverBackgroundColor: '#787878',
      tooltipColor: '#dadada',
    },
    {
      label: 'ביטוח בריאות',
      data: 210548,
      backgroundColor: '#c8ff00',
      hoverBackgroundColor: '#c8ff00',
      tooltipColor: '#e6eec8',
    },
    {
      label: 'ביטוח רכב',
      data: 96456,
      backgroundColor: '#f92020',
      hoverBackgroundColor: '#f92020',
      tooltipColor: '#facbcb',
    },
  ]

  return (
      // <div>
      <div style={{paddingTop: '100px', paddingLeft: '300px'}}>
        <SavingsChart data={chartPieData} title={"?כמה חסכתי עד היום"}/>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe deleniti aliquid beatae harum magnam labore unde. Praesentium placeat voluptatum quibusdam quae dolore inventore itaque fugiat sint autem soluta facilis, sit consequatur minus aut, voluptates cumque iusto laudantium magnam! Quis omnis maxime rem, blanditiis porro expedita culpa neque est! Tempora, aperiam laboriosam. Assumenda inventore natus, ea soluta porro cupiditate dolorem ad corrupti, enim veniam deserunt cumque a laboriosam, veritatis nisi aut minus? Nihil ipsum consequatur laborum debitis provident nulla culpa ipsam soluta sapiente neque. Mollitia nobis optio modi, non iste quos consequatur nesciunt dolorem at. Ipsam quisquam aliquam est labore magnam architecto voluptas exercitationem totam, veniam voluptate ad laudantium delectus, dolorum eaque? Et ut dicta animi, saepe impedit maiores, distinctio necessitatibus eligendi quis, autem fugiat ratione voluptate pariatur labore repellendus quasi doloribus non? Ducimus accusantium consequuntur aliquam modi repellendus velit fuga nemo nihil, laboriosam recusandae voluptatibus magni eos obcaecati pariatur natus dignissimos doloribus mollitia dicta. Consequuntur dolorem numquam voluptatum, tempore recusandae quisquam repellendus voluptatem id laborum impedit nulla fugit nobis repudiandae similique laboriosam error provident quaerat sint ducimus quasi cum eius iusto. Ducimus nisi veritatis iste earum quasi dolores officiis est, reiciendis consequuntur temporibus iure? Aspernatur ipsum nam maxime quaerat, voluptates odio odit quis nisi cumque et sequi, delectus voluptas culpa deserunt eius quidem? Nihil sint cupiditate sed quasi quae, est, ducimus reiciendis ipsum dignissimos excepturi, expedita iusto ex maiores similique error explicabo dolore! Voluptate dicta, architecto voluptates laborum mollitia reiciendis, aspernatur consequatur temporibus consequuntur tenetur atque cumque, velit quis laboriosam? Voluptates sequi nisi nam? Ab, exercitationem accusamus eaque quidem aliquam, magnam nesciunt commodi magni neque veniam consequuntur possimus unde? Architecto asperiores, modi, consectetur, minus sunt voluptatibus quis fugiat nulla accusamus enim dignissimos cupiditate at hic iusto ipsum? Iure a inventore ea dolorem, veniam officia ipsam ad, dicta quia voluptates dolore sapiente harum pariatur nihil doloribus maxime blanditiis veritatis consequatur. Odit, eaque similique ad pariatur magni voluptatum officia expedita illo tempora magnam nobis commodi suscipit sed voluptate! Suscipit veniam necessitatibus nisi? Beatae, deleniti sunt. Rem quidem similique nulla officiis! Iure labore, quod voluptates unde velit tempore. Rem modi qui blanditiis.
        </div>
      </div>
  )
}

export default App
