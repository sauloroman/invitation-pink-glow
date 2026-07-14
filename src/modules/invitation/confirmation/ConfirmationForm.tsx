import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AsteriskIcon, PaperPlaneTiltIcon } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ConfirmationFormI {
    attendance: string,
    attendees_number: number,
    name: string,
    phone_number: string,
    message?: string
}

export const ConfirmationForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<ConfirmationFormI>({
        defaultValues: {
            attendance: '1',
            attendees_number: 0,
            name: 'Saulo Román Santillán Nava',
            phone_number: '',
            message: ''
        }
    })

    const attendanceValue = watch('attendance')

    const onSendConfirmation = (data: ConfirmationFormI) => {
        const formattedData = {
            ...data,
            attendance: data.attendance === '1' ? true : false,
            attendees_number: data.attendance === '1' ? Number(data.attendees_number) : 0,
            message: data.message
        }

        console.log(formattedData)
    }

    useEffect(() => {
        if (attendanceValue === '0') {
            setValue('attendees_number', 0)
        }
    }, [attendanceValue, setValue])

    return (
        <form onSubmit={handleSubmit(onSendConfirmation)} className="confirmation__form">
            <div className="confirmation__form-field">
                <label
                    className='confirmation__form-label flex items-center gap-1'
                    htmlFor="attendace"
                >
                    <AsteriskIcon size={15} />
                    ¿Asistirás a la fiesta?
                </label>
                <div className="confirmation__form-options">
                    <label
                        htmlFor="attendace-si"
                        className='confirmation__form-option'
                    >
                        <input
                            {...register('attendance', {
                                required: 'Debes seleccionar una opción'
                            })}
                            defaultChecked={true}
                            className='confirmation__form-radio'
                            type="radio"
                            id="attendace-si"
                            value='1'
                        />
                        <p className='confirmation__form-option-text'>Si, asistiré</p>
                        <span className='confirmation__form-error'>{errors.attendance?.message}</span>
                    </label>

                    <label
                        htmlFor="attendace-no"
                        className='confirmation__form-option'
                    >
                        <input
                            {...register('attendance', {
                                required: 'Debes seleccionar una opción'
                            })}
                            className='confirmation__form-radio'
                            type="radio"
                            id="attendace-no"
                            value='0'
                        />
                        <p className='confirmation__form-option-text'>No, lo siento</p>
                    </label>
                </div>
            </div>

            <div className="confirmation__form-field">
                <label
                    htmlFor="name"
                    className='confirmation__form-label flex items-center gap-1'
                >
                    <AsteriskIcon size={15} />
                    Nombre Completo
                </label>
                <input
                    {...register('name', {
                        required: 'Debes ingresar tu nombre',
                        maxLength: { value: 50, message: 'El nombre debe tener menos de 50 caracteres' },
                        minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
                    })}
                    id="name"
                    type="text"
                    value={'Saulo Román Santillán Nava'}
                    className='confirmation__form-input'
                    disabled
                    name="name"
                />
                <span className='confirmation__form-error'>{errors.name?.message}</span>
            </div>

            <div className="confirmation__form-field">
                <label
                    htmlFor="phone_number"
                    className='confirmation__form-label flex items-center gap-1'
                >
                    <AsteriskIcon size={15} />
                    Número de teléfono
                </label>
                <input
                    {...register('phone_number', {
                        required: 'Debes ingresar tu número de teléfono',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'El número de teléfono debe tener 10 dígitos'
                        }
                    })}
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    placeholder='Tu número'
                    className='confirmation__form-input'
                />
                <span className='confirmation__form-error'>{errors.phone_number?.message}</span>
            </div>

            <AnimatePresence>
                {attendanceValue === '1' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                        className="confirmation__form-field"
                    >
                        <label
                            htmlFor="attendees_number"
                            className='confirmation__form-label flex items-center gap-1'
                        >
                            <AsteriskIcon size={15} />
                            ¿Cuántas personas te acompañarán?
                        </label>
                        <select
                            {...register('attendees_number', {
                                required: 'Debes seleccionar el número de acompañantes',
                                validate: (value) => Number(value) > 0 || 'Debes seleccionar al menos 1 acompañante'
                            })}
                            name="attendees_number"
                            id="attendees_number"
                            className='confirmation__form-select'
                        >
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <span className='confirmation__form-error'>{errors.attendees_number?.message}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="confirmation__form-field">
                <label
                    htmlFor="message"
                    className='confirmation__form-label'
                >
                    Mensaje para la quinceañera
                </label>
                <textarea
                    {...register('message')}
                    name="message"
                    id="message"
                    placeholder='Mensaje'
                    className='confirmation__form-textarea'
                />
            </div>

            <div className="confirmation__form-buttons">
                <button
                    type='submit'
                    className='btn btn--pink flex items-center justify-center gap-1'
                >
                    <PaperPlaneTiltIcon size={20} weight='thin' />
                    Enviar RSVP
                </button>
            </div>
        </form>
    )
}
