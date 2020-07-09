import React, {useEffect} from 'react';
import { motion, useCycle } from 'framer-motion';

const firstAnimationVariants = {
    leftAnimation1: {
        x: '-20rem',
        transition: {
            x: {
                duration: 3
            }
        }
    },
    upAnimation1: {
        y: '-25rem',
        transition: {
            y: {
                duration: 3
            },
        }
    },
    rightAnimation1: {
        x: '0rem',
        transition: {
            x: {
                duration: 3
            }
        }
    },
    downAnimation1: {
        y: '0rem',
        transition: {
            y: {
                duration: 3
            }
        }
    }
};

const secondAnimationVariants = {
    downAnimation2: {
        y: '8rem',
        transition: {
            y: {
                duration: 3
            }
        }
    },
    rightAnimation2: {
        x: '20rem',
        transition: {
            x: {
                duration: 3
            }
        }
    },
    upAnimation2: {
        y: '-11rem',
        transition: {
            y: {
                duration : 3
            }
        }
    },
    leftAnimation2: {
        x: '0rem',
        transition: {
            x: {
                duration: 3
            }
        }
    }
};

const thirdAnimationVariants = {
    downAnimation3: {
        y: '16rem',
        transition: {
            y: {
                duration: 3,
                delay: 3
            }
        }
    },
    leftAnimation3: {
        x: '-20rem',
        transition: {
            x: {
                duration: 3,
                delay: 3

            },
        }
    },
    upAnimation3: {
        y: '0rem',
        transition: {
            y: {
                duration: 3,
                delay: 3

            }
        }
    },
    rightAnimation3: {
        x: '0rem',
        transition: {
            x: {
                duration: 3,
                delay: 3

            }
        }
    }
};

const App = () => {

    const [animation1, cycleAnimation1] = useCycle('leftAnimation1', 'upAnimation1', 'rightAnimation1', 'downAnimation1');
    const [animation2, cycleAnimation2] = useCycle('downAnimation2', 'rightAnimation2', 'upAnimation2', 'leftAnimation2');
    const [animation3, cycleAnimation3] = useCycle('downAnimation3', 'leftAnimation3', 'upAnimation3', 'rightAnimation3');
    
    useEffect(() => {
        setInterval(() => {
            cycleAnimation1();
        }, 3000);

        setInterval(() => {
            cycleAnimation2();
        }, 3000);

        setInterval(() => {
            cycleAnimation3();
        }, 3000);
        

    }, []);

    return (
        <div>
            <div className='container'>
                <div>
                    <motion.div 
                        className='notification2'
                        variants={thirdAnimationVariants}
                        animate={animation3}
                    
                    ></motion.div>
                    
                    <motion.div 
                        className='notification3'
                        variants={secondAnimationVariants}
                        animate={animation2}
                    ></motion.div>
                    
                    <motion.div 
                        className='notification'
                        variants={firstAnimationVariants}
                        animate={animation1}
                    ></motion.div>
                </div>
            </div>
        </div>
    )
};
export default App;