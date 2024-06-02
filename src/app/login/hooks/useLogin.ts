import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation';

const credentials = {
    email: 'abc@gmail.com',
    password: 'qaTester1234'
}

const useLogin = () => {
     const router = useRouter();
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = () => {
        if (state.email === credentials.email && state.password === credentials.password) {
            // login user and save value in cookie.
            localStorage.setItem("authenticated", 'true');
            router.push('/');
        }
    }

  return {
    handleSubmit,
    handleChange,
    state,
  }
}

export default useLogin