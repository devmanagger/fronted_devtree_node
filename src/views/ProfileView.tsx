import {useForm} from 'react-hook-form'
import { ErrorMessage } from '../components'
import {  useQueryClient } from '@tanstack/react-query'

import type { ProfileForm, User } from '../types'
export const ProfileView = () => {
   const queryClient =useQueryClient()
   //cacheando la data del usuario
   const data: User = queryClient.getQueryData(['users'])!
     const {register,  handleSubmit, formState: {errors}} = useForm<ProfileForm>({defaultValues:{
        handle: data.handle,
        description: data.description,
     }})
   //funcion que se ejecuta al enviar el formulario
        const onSubmit = (data: ProfileForm) => {
        console.log('from data profile ',data)
        }
   return (
        <form
            className="bg-white p-10 rounded-lg space-y-5"
            onSubmit={handleSubmit(onSubmit)}
        >
            <legend className="text-2xl text-slate-800 text-center">Editar Información</legend>
            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="handle"
                >Handle:</label>
                <input
                    type="text"
                    className="border-none bg-slate-100 rounded-lg p-2"
                    placeholder={data.handle}
                    {...register('handle',{required: 'El handle es obligatorio'})}
                />
                {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="description"
                >Descripción:</label>
                <textarea
                    className="border-none bg-slate-100 rounded-lg p-2"
                    placeholder={data.description || 'Agrega una descripción a tu perfil'}
                    {...register('description',{required: 'La descripción es obligatoria'})}
                />
                {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="handle"
                >Imagen:</label>
                <input
                    id="image"
                    type="file"
                    name="handle"
                    className="border-none bg-slate-100 rounded-lg p-2"
                    accept="image/*"
                    onChange={ () => {} }
                />
            </div>

            <input
                type="submit"
                className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                value='Guardar Cambios'
            />
        </form>
    )
}
