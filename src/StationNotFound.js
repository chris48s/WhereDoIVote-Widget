import React from 'react';
import { EmbedCard, BuiltByDC } from './Branding';
import { Notification } from './Notification';

function StationNotFound(props) {
    return (
            <EmbedCard>
                { props.metadata && ('2018-05-03-id-pilot' in props.metadata) &&
                  <Notification
                    title={props.metadata['2018-05-03-id-pilot'].title}
                    url={props.metadata['2018-05-03-id-pilot'].url}
                  />
                }
                <h2 id='dc_header'>We couldn't find your station</h2>
                { props.council &&
                    <div>
                        <span id='dc_get_in_touch'>Get in touch with <b>
                        { props.council.council_id.startsWith('N09') ? 'The Electoral Office for Northern Ireland' : props.council.name }</b>:</span>
                         <br/>
                         <br/>
                         <ul>
                            <li>Website - <a href={props.council.website}>{props.council.website}</a></li>
                            <li>Phone - {props.council.phone}</li>
                            <li>Email - <a href={"mailto:"+props.council.email}>{props.council.email}</a></li>
                         </ul>
                         <br/>
                     </div>
                 }
                 <button href="#" onClick={props.home}>Back to postcode search</button>

                <BuiltByDC/>
            </EmbedCard>
    );
}

export default StationNotFound;