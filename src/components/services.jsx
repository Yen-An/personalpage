export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>專業技能</h2>
          <p>
            習慣以CLI開發前端，具有撰寫CURD功能的API的能力，使用的語言是Javascript，對SQL不陌生，也有碰過Node，
            <br/>
            在現職公司開發了禮品管理系統，從前端設計到後端資料庫設計由自己一手包辦，
            <br/>
            該系統可以讓禮品的管理者將買來的禮品入庫，做庫存管理，並讓其他user在系統上申請領用，並讓管理者去審核申請，
            <br/>
            處理公司同仁電腦大大小小問題也是我的工作職責，擅長解決微軟OS各種稀奇古怪的問題，
            <br/>
            近半年因資安法規關係，轉為資安人員，具備ISO27001的觀念，並有ISO27001:2013主導稽核員證照。
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
