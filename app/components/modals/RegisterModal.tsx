'use client';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import {useCallback, useState} from 'react';
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';

import useRegiserModal from '@/app/hooks/useRegisterModal';
const RegisterModal = () =>{
    const registerModal = useRegiserModal();
    const [isLoading, setIsLoading] = useState(false);

    const{
        register,
        handleSubmit,
        formState:{
            errors,
        }
     } = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    });
    

    const onSubmit: SubmitHandler<FieldValues> =(data) => {
        setIsLoading(true);
        axios.post('/api/register',data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) =>{
                console.log(error);
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }
    return(
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Contine"
            onClose={registerModal.onClose}
            on
        />
    )
}

export default RegisterModal;