import React, {useMemo} from 'react'
import * as D from '../../data'
import CustomerComment from './CustomerComent'
import {Div} from '../../components'

type PromotionProps = {}

const Promotion: React.FC<PromotionProps> = ({}) => {
  const comments = useMemo(() => D.makeArray(3).map(D.makeRandomCustomerComment), [])
  const children = useMemo(
    () =>
      comments.map((comment) => (
        <CustomerComment key={comment.uuid} customerComment={comment} />
      )),
    [comments]
  )
  return (
    <section className="w-full mt-4">
      <h2 className="font-bold text-5xl ml-4">What our customers say:</h2>
      <div className="flex justify-between w-full p-4">
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center text-white bg-primary">
          Your message here
        </Div>
        <div className="flex flex-wrap justify-center p-4 mt-4">{children}</div>
        <Div
          width="15%"
          minWidth="15%"
          className="flex items-center justify-center text-white bg-primary">
          Your advertizement here
        </Div>
      </div>
    </section>
  )
}

export default Promotion
