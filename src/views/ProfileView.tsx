import {useForm} from 'react-hook-form'
import { ErrorMessage } from '../components'
import {  useMutation, useQueryClient } from '@tanstack/react-query'

import type { ProfileForm, User } from '../types'
import { updateUser, uploadImage } from '../api'
import { toast } from 'sonner'
export const ProfileView = () => {
   const queryClient =useQueryClient()
   //cacheando la data del usuario
   const data: User = queryClient.getQueryData(['users'])!
     const {register,  handleSubmit, formState: {errors}} = useForm<ProfileForm>({defaultValues:{
        handle: data.handle,
        description: data.description,
     }})

     //funtion update profile with useMutation
     const updateProfile = useMutation({
         mutationFn: updateUser,
          onError:(error)=>{
             toast.error(error.message)
          },
          onSuccess:(data)=>{
             toast.success(data)
                queryClient.invalidateQueries({
                    queryKey: ['users']
                })

          }
     })
     // funcion para subir imagen a cloudinary
 const uploadImageCloudinary =useMutation({
     mutationFn:uploadImage,
        onError:(error)=>{
            console.log(error);
        },
        onSuccess:(data)=>{
            console.log('data image',data);
        }
 })





   //funcion que se ejecuta al enviar el formulario
        const onSubmit = (formData: ProfileForm) => {
         updateProfile.mutate(formData)
        }
    //funcion que se ejecuta al cambiar la imagen
        const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
            if(e.target.files){
                uploadImageCloudinary.mutate(e.target.files[0]);

            }
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
                    onChange={handleChangeImage}
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
