
import bunyan from 'bunyan';
import bformat from 'bunyan-format';
const formatout =bformat({outputMode:'short'});
const log = bunyan.createLogger({stream:formatout,name:'User-Api', level:'debug'});

export default log;
