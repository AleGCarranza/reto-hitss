export default function Layout(){
  return(
     <main className="max-w-[1440px] mx-auto mt-8 px-4 lg:px-0">
      
      <div className="lg:grid lg:grid-cols-12 flex flex-col min-h-[500px] lg:h-[719px]">
        <div className="lg:col-start-2 lg:col-span-3 bg-primary rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-8">
          Sidebar Steps
        </div>
        <div className="lg:col-span-7 bg-secondary rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none p-8">
          Forms
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12 mt-6 mb-8">
        <div className="lg:col-start-2 lg:col-span-10 flex justify-between">
          <button>anterior</button>
          <button>siguiente</button>
        </div>
      </div>
    </main>
  )
    
}