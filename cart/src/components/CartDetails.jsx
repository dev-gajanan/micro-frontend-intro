import React, { useEffect, useState } from 'react'
import { jwt, login } from '../services/cart';


export default function CartDetails() {

    const [token, setToken] = useState("");

  return (
    <div>CartDetails: {token}</div>
  )
}
