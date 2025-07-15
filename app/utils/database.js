import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    "https://dyawwipwwmyqfbvoqsst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5YXd3aXB3d215cWZidm9xc3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MjUzNjAsImV4cCI6MjA2NzEwMTM2MH0.jNP6QisBa7GgketBFemvQtGUbrEkxE4jVARvAW0au0o"
)

export default supabase
