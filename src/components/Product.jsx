import React from 'react'
import './css/product.css'
import ProductCard from './ProductCard'

const Product = () => {
    const obj=[
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b2e8f89f-7725-40e8-8616-4e35415f66e8/air-jordan-1-low-se-craft-shoes-8SsDw6.png",
        head:"nike shoe1",
        price:"$20",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/72338731-8962-440b-91b0-1579388443d5/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png",
        head:"nike shoe2",
        price:"$57",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5c2d5d73-ca65-41bc-b165-908c1ed77774/jordan-one-take-5-quai-54-pf-basketball-shoes-FqsGlx.png",
        head:"nike shoe3",
        price:"$31",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cb260fe2-8df7-4a4b-b837-4028c982f877/jumpman-mvp-shoes-JV1HCs.png",
        head:"nike shoe4",
        price:"$70",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3bdf52f5-1615-4bdf-9936-355332055c21/tatum-2-legacy-pf-basketball-shoes-WWbXXK.png",
        head:"nike shoe5",
        price:"$55",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e90fa2e0-3a2b-45d1-ba10-9dcc0d68cdd2/jordan-stay-loyal-3-shoes-GNHN2X.png",
        head:"nike shoe6",
        price:"$80",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5e572279-d759-4ee8-ae8f-2b58579e6348/air-jordan-1-low-se-shoes-qT62xW.png",
        head:"nike shoe7",
        price:"$45",
        desc:"UI/UX DESIGNING USING REACT",
        },
        {image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9666574d-f12c-46c8-b04b-fc50b3581e91/air-jordan-1-mid-shoes-BpARGV.png",
        head:"nike shoe8",
        price:"$60",
        desc:"UI/UX DESIGNING USING REACT",
        },
        

       
    ]
  return (
    <div className='container'>
    <div className='body'>
    {
            obj.map((objects,i)=>(
                <ProductCard key={i} objects={objects} />
        
            ))}
     
       
    </div>

    </div>
  )
}

export default Product