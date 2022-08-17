import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className="subscribe">
                <div className="subscribe-block">
                    <h2 className="subscribe-heading">Subscribe <em>to</em> Oberon</h2><p
                    className="paragraph-subscribe">Sign up to our newsletters and we'll keep you in the loop.</p>
                    <div className="form-block-subscribe w-form">

                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Field>
                                <form id="wf-form-Subscribe" name="wf-form-Subscribe" data-name="Subscribe" method="get" className="form-subscribe" aria-label="Subscribe">
                            <input type="email"
                                   className="text-field-subscribe w-input"
                                   {...register("email",
                                       {
                                           required: true,
                                           pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                       })}
                                   maxLength="256"
                                   placeholder="Email Address..."
                                   id="email-2" required=""/>
                                    <button
                                        type="submit" value="Subscribe" data-wait="Please wait..."
                                        className="submit-button-subscribe w-button">
                                        Submit
                             </button>
                                </form>
                            </Form.Field>
                        </Form>
                        <div className="success-message w-form-done" style={{display: "none"}} tabIndex="-1" role="region"
                             aria-label="Subscribe success">
                            <div className="success-text">Thank you! Your submission has been received!</div>
                        </div>
                        {errors.email &&  <div className="error-message w-form-fail" style={{display: "none"}} tabIndex="-1" role="region"
                             aria-label="Subscribe failure">
                            <div className="error-text">Oops! Something went wrong while submitting the form.</div>
                        </div>
                        }

                    </div>
                </div>
            </div>

                {/*{errors.email &&*/}
                {/*    <div className="error-message w-form-fail" tabIndex="-1" role="region"*/}
                {/*                      aria-label="Subscribe failure" >*/}
                {/*    <div className="error-text">Oops! Something went wrong while submitting the form.</div>*/}
                {/*</div>*/}
                {/*}*/}
                {/*<Button type='submit'>Submit</Button>*/}
        </div>
    )
}