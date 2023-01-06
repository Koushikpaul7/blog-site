import React from 'react';
const Banner = () => {
    return (
        <div>
            <h1 className='text-center bg-danger p-3 fs-3 text-white'>Latest Blog</h1>

            <div className='container'>
                <div className='row g-5'>
                     <div className='col-12 col-md-8'>
                         <p>Featured news</p>
                         
                         <div class="card" >
  <img src="https://img.freepik.com/free-vector/fake-news-background-concept_23-2148514224.jpg?w=740&t=st=1672921411~exp=1672922011~hmac=fa22f3fb79f8549e6859d264ab5e4d08e1d4862de21463dd8410fc8a5b6a726e" class="card-img-top rounded img-fluid " style={{height:"300px"}} alt="..."/>
  <div class="card-body">
    <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
  </div>
</div>


                     </div>
                     <div className='col-12 col-md-4'>
                         <div>
                            <p></p>
                            <p>Side news</p>
                         </div>
                         <ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;