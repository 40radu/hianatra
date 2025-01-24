import Heading from '@/components/common/Heading'
import Input from '@/components/common/Input'
import TextArea from '@/components/common/TextArea'
import Button from '@/components/navigation/Button'
import classNames from 'classnames'
import React from 'react'
import "./style.scss"

function ContactForm() {
    return (
        <div className={classNames("form-contact")}>
            <Heading label='' align='start'>
                <span className='primary'>Contactez</span><span className='secondary'>-nous</span>
            </Heading>
            <form className={classNames("container-fields")}>
                <fieldset><Input name='name' placeholder='Name' /></fieldset>
                <fieldset><Input name='email' placeholder='Email' /></fieldset>
                <fieldset><Input name='subject' placeholder='Subject' /></fieldset>
                <fieldset><TextArea name='message' placeholder='Message' /></fieldset>
                <Button type='submit' label='Envoyer un message' className='btn' />
            </form>
        </div>
    )
}

export default ContactForm