const { CASES } = require('../data/cases.js');

module.exports = function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const list = CASES.map(c => ({
    id: c.id,
    name: c.name,
    demo: c.demo,
    drgBilled: c.drgBilled,
    drgBilledDesc: c.drgBilledDesc,
    charge: c.charge,
    claim: c.claim,
    record: c.record
  }));

  res.status(200).json(list);
};
