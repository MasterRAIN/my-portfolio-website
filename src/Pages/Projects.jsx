import Reveal from "../Components/Reveal";
import PageSectionHeader from "../Components/PageSectionHeader";

function Projects() {
  return (
    <div className="relative">
      <br /><br />
      <Reveal distance={50}>
        <PageSectionHeader  
          icon="bug"
          title="My"
          subtitle="Projects"
          textColor="text-oxford dark:text-b"
          subtextColor="text-heat dark:text-pro"
        />
      </Reveal>
      <br /><br />
      <br /><br />
      <br /><br />
      <div className="px-40 flex justify-center">
        <div className="w-fit text-3xl text-black dark:text-white">
          <Reveal axis="x">In Progress . . .</Reveal>
        </div>
      </div>
      {/* <br />
      <br />
      <h4 className="text-4xl font-bold text-center text-c">Projects</h4>
      <br />  
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative pb-20">
          <h1 className="font-bold text-2xl dark:text-a">COVIK Tabaco</h1>
          <li className="text-c">JavaScript</li>
          <li className="text-c">JQuery</li>
          <li className="text-c">PHP</li>
          <li className="text-c">CSS</li>
          <li className="text-c">HTML</li>
          <li className="text-c">MySQL</li>
          <br />
          <p className="indent-12">COVIK-Tabaco (Covid-19 Virtual Information Kiosk) is a platform aimed to counter the threats of misinformation concerning Covid-19, and to provide a centralized hub for credible information.</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pers">Personal</h1>
        </div>
        <img className="h-96 px-12 py-12" src={process.env.PUBLIC_URL + "/Images/covik.svg"} alt="" />
      </div>
      <br />
      <br />
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative">
          <h1 className="font-bold text-2xl dark:text-a">CCRAS Automation</h1>
          <li className="text-c">JavaScript</li>
          <li className="text-c">PHP</li>
          <li className="text-c">CSS</li>
          <li className="text-c">HTML</li>
          <li className="text-c">MySQL</li>
          <br />
          <p className="indent-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus unde temporibus labore natus reiciendis.</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pro">Professional</h1>
        </div>
        <img className="h-96 px-12 py-12" src={process.env.PUBLIC_URL + "/Images/ccras.svg"} alt="" />
      </div>
      <br />
      <br />
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative">
          <h1 className="font-bold text-2xl dark:text-a">ToDo List</h1>
          <li className="text-c">React JS</li>
          <li className="text-c">Tailwind CSS</li>
          <br />
          <p className="indent-12">TodoList: Your Personal Task Manager - Easily create, prioritize, and complete tasks to stay on top of your to-do list and achieve your goals.</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pers">Personal</h1>
        </div>
        <img className="h-96 px-12 py-12" src={process.env.PUBLIC_URL + "/Images/todolist.svg"} alt="" />
      </div>
      <br />
      <br />
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative">
          <h1 className="font-bold text-2xl dark:text-a">Smart EOD Utility</h1>
          <li className="text-c">C#</li>
          <li className="text-c">WinForms</li>
          <br />
          <p className="indent-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, delectus unde temporibus labore natus reiciendis.</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pro">Professional</h1>
        </div>
        <img className="h-96 px-12 py-12" src={process.env.PUBLIC_URL + "/Images/smart_eod.svg"} alt="" />
      </div>
      <br />
      <br />
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative">
          <h1 className="font-bold text-2xl dark:text-a">Tic Tac Toe</h1>
          <li className="text-c">Java</li>
          <br />
          <p className="indent-12">"Tic Tac Toe Java Game: Classic fun in a modern twist. Play against a friend in this timeless game of strategy and wits. Enjoy hours of entertainment with this Java-based version of Tic Tac Toe."</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pers">Personal</h1>
        </div>
        <img className="rounded-custom h-fit" src={process.env.PUBLIC_URL + "/Images/tictactoe.svg"} alt="" />
        <img className="rounded-custom h-fit" src={process.env.PUBLIC_URL + "/Images/tictactoe2.svg"} alt="" />
      </div>
      <br />
      <br />
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative">
          <h1 className="font-bold text-2xl dark:text-a">Mobile Price Verifier</h1>
          <li className="text-c">Xamarin</li>
          <li className="text-c">C#</li>
          <li className="text-c">MySQL</li>
          <br />
          <p className="indent-12">Quickly and easily scan barcodes using phones camera or enter product barcode to instantly compare prices and find the best deals while shopping on the go.</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pro">Professional</h1>
        </div>
        <img className="rounded-custom h-fit" src={process.env.PUBLIC_URL + "/Images/price_ver.svg"} alt="" />
        <img className="rounded-custom h-fit" src={process.env.PUBLIC_URL + "/Images/price_ver2.svg"} alt="" />
      </div>
      <br />
      <br />
      <div className="flex gap-10 w-8/12 rounded-md shadow-md bg-white dark:bg-h px-12 py-12">
        <div className="dark:text-a relative">
          <h1 className="font-bold text-2xl dark:text-a">Mobile Price Verifier</h1>
          <h1 className="font-bold text-1xl dark:text-a">( Web version )</h1>
          <li className="text-c">JavaScript</li>
          <li className="text-c">PHP</li>
          <li className="text-c">HTML</li>
          <li className="text-c">CSS</li>
          <li className="text-c">Bootstrap</li>
          <li className="text-c">MySQL</li>
          <br />
          <p className="indent-12">Quickly and easily scan barcodes using phones camera or enter product barcode to instantly compare prices and find the best deals while shopping on the go.</p>
          <h1 className="w-fit rounded-md shadow-md py-2 px-4 absolute bottom-0 text-pro">Professional</h1>
        </div>
        <img className="rounded-custom h-fit" src={process.env.PUBLIC_URL + "/Images/price_ver3.svg"} alt="" />
        <img className="rounded-custom h-fit" src={process.env.PUBLIC_URL + "/Images/price_ver4.svg"} alt="" />
      </div>
      <br />
      <br /> */}
    </div>
  )
}

export default Projects;