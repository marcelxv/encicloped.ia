import { useState } from 'react'
import { router } from 'next/router'
import Head from 'next/head'
import { Button } from '@chakra-ui/react'

function Index() {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
            <>
                <main>
                    <h1>Encicloped.ia<h1>
                    <div>
                        <p>See me as an assistant in your next project</p>
                        <p>I register anything to your Notion Page</p>
                        {loggedIn ? (
                            <div>
                                <Button onClick={() => setLoggedIn(false)}>Logout</Button>
                                <Button onClick={() => router.push('/list-tasks')
                                }> Go to your tasks </Button>
                            </div>
                        ) : (
                            <div>
                                <Button onClick={() => setLoggedIn(true)}>Login</Button>
                            </div>
                        )}
                    </div>
                </main>
            </>
    )
}

export default Index