import React from 'react';

function BallotTypeList(props) {
  const cddts = props.ballot.candidates;
  const allPartiesNames = cddts.map(c => c.party.party_name);
  const partyNames = Array.from(new Set(allPartiesNames));
  const parties = [];
  for (var i = 0; i < partyNames.length; i++) {
    const candidates = cddts.filter(c => c.party.party_name === partyNames[i]);
    const party = {
      candidates: candidates.sort((o1, o2) => o1.list_position - o2.list_position),
      party_id: candidates[0].party.party_id,
      party_name: partyNames[i],
    };
    parties.push(party);
  }
  return (
    <section className="BallotTypeList">
      <p>You will vote for your preferred party rather than a candidate on this ballot paper</p>
      <ul>
        {parties.map(party => (
          <li className="BallotTypeListItem" key={party.party_id}>
            <h4 className={`candidate-name party-${party.party_id.split(':')[1]}`}>
              {party.party_name}
            </h4>
            <ol>
              {party.candidates.map(candidate => (
                <li key={candidate.person.absolute_url}>
                  <a href={candidate.person.absolute_url}>{candidate.person.name}</a>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BallotTypeList;