/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kdozxkcfkbcggjfmxzjt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkb3p4a2Nma2JjZ2dqZm14emp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0OTU0MzEsImV4cCI6MjAzMDA3MTQzMX0.eAkfQHpoaFsU9lnlp2gvXmzlx6qsKKND9Ss-W-w-yWA"

export const supabase = createClient(supabaseUrl, supabaseKey)